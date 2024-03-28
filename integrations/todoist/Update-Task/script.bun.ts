import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'
import type { RequireOneOrNone, RequireAllOrNone } from 'type-fest';
import { Number as NumberRunType, Record, type Static, Literal, Union } from 'runtypes';

type Todoist = {
    Token: string
}

export declare const Duration: Record<{
    amount: import("runtypes").Constraint<NumberRunType, number, unknown>;
    unit: Union<[Literal<"minute">, Literal<"day">]>;
}, false>;

export type Duration = Static<typeof Duration>;

export async function main(resource: Todoist, task: {
    Id: string,
    args: {
        content?: string;
        description?: string;
        labels?: string[];
        priority?: number;
        dueLang?: string | null;
        assigneeId?: string | null;
        dueString?: string;
    } & RequireOneOrNone<{
        dueDate?: string;
        dueDatetime?: string;
    }> & RequireAllOrNone<{
        duration?: Duration['amount'];
        durationUnit?: Duration['unit'];
    }>, requestId?: string
}) {
    const api = new TodoistApi(resource.Token)
    const taskResponse = await api.updateTask(task.Id, task.args)
    return taskResponse
}
