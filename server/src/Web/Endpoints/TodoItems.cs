﻿using Stride.Application.TodoItems.Commands.CreateTodoItem;
using Stride.Application.TodoItems.Commands.DeleteTodoItem;
using Stride.Application.TodoItems.Commands.UpdateTodoItem;
using Stride.Application.TodoItems.Commands.UpdateTodoItemDetail;
using Stride.Application.TodoItems.Queries.GetTodoItems;

namespace Stride.Web.Endpoints;

public class TodoItems : EndpointGroupBase
{
    private bool _isDevelopment;

    public override void Map(WebApplication app)
    {
        _isDevelopment = app.Environment.IsDevelopment();

        app.MapGroup(this)
            .RequireAuthorization()
            .MapGet(GetTodoItems, "{listId}")
            .MapPost(CreateTodoItem)
            .MapPut(UpdateTodoItem, "{id}")
            .MapPut(UpdateTodoItemDetail, "UpdateDetail/{id}")
            .MapDelete(DeleteTodoItem, "{id}");
    }

    public async Task<TodoItemsVm> GetTodoItems(ISender sender, int listId) => await sender.Send(new GetTodoItemsQuery(listId));

    public async Task<IResult> CreateTodoItem(ISender sender, CreateTodoItemCommand command)
    {
        try
        {
            return Results.Ok(await sender.Send(command));
        }

        catch(UnauthorizedAccessException)
        {
            return _isDevelopment
                ? Results.Forbid()
                : Results.NotFound();
        }
    }

    public async Task<IResult> UpdateTodoItem(ISender sender, int id, UpdateTodoItemCommand command)
    {
        try
        {
            if(id != command.Id)
            {
                return Results.BadRequest();
            }

            await sender.Send(command);
            return Results.NoContent();
        }
        catch(UnauthorizedAccessException)
        {
            return _isDevelopment
                ? Results.Forbid()
                : Results.NotFound();
        }
    }

    public async Task<IResult> UpdateTodoItemDetail(ISender sender, int id, UpdateTodoItemDetailCommand command)
    {
        try
        {
            if(id != command.Id)
            {
                return Results.BadRequest();
            }

            await sender.Send(command);
            return Results.NoContent();
        }
        catch(UnauthorizedAccessException)
        {
            return _isDevelopment
                ? Results.Forbid()
                : Results.NotFound();
        }
    }

    public async Task<IResult> DeleteTodoItem(ISender sender, int id)
    {
        try
        {
            await sender.Send(new DeleteTodoItemCommand(id));
            return Results.NoContent();
        }
        catch(UnauthorizedAccessException)
        {
            return _isDevelopment
                ? Results.Forbid()
                : Results.NotFound();
        }
    }
}
