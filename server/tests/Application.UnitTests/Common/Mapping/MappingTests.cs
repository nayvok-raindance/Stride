﻿using System.Reflection;
using System.Runtime.Serialization;

using AutoMapper;

using NUnit.Framework;

using Stride.Application.Common.Interfaces;
using Stride.Application.TodoLists.Queries.GetTodoLists;
using Stride.Domain.Entities;

namespace Stride.Application.UnitTests.Common.Mapping;

public class MappingTests
{
    private readonly IConfigurationProvider _configuration;
    private readonly IMapper _mapper;

    public MappingTests()
    {
        _configuration = new MapperConfiguration(config =>
            config.AddMaps(Assembly.GetAssembly(typeof(IApplicationDbContext))));

        _mapper = _configuration.CreateMapper();
    }

    [Test]
    public void ShouldHaveValidConfiguration() => _configuration.AssertConfigurationIsValid();

    [Test]
    [TestCase(typeof(TodoList), typeof(TodoListDto))]
    [TestCase(typeof(TodoItem), typeof(TodoLists.Queries.GetTodoLists.TodoItemDto))]
    [TestCase(typeof(TodoItem), typeof(TodoItems.Queries.GetTodoItems.TodoItemDto))]
    public void ShouldSupportMappingFromSourceToDestination(Type source, Type destination)
    {
        var instance = GetInstanceOf(source);

        _mapper.Map(instance, source, destination);
    }

    private static object GetInstanceOf(Type type)
    {
        if(type.GetConstructor(Type.EmptyTypes) != null)
        {
            return Activator.CreateInstance(type)!;
        }

        // Type without parameterless constructor
        // TODO: Figure out an alternative approach to the now obsolete `FormatterServices.GetUninitializedObject` method.
#pragma warning disable SYSLIB0050 // Type or member is obsolete
        return FormatterServices.GetUninitializedObject(type);
#pragma warning restore SYSLIB0050 // Type or member is obsolete
    }
}
