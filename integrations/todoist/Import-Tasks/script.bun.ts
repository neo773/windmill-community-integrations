import { TodoistApi } from '@doist/todoist-api-typescript'
import { v9 as Todoist } from 'todoist'
import type { RequireOneOrNone, RequireAllOrNone } from 'type-fest'
import { Number as NumberRunType, Record, type Static, Literal, Union } from 'runtypes';


export declare const Duration: Record<{
    amount: import("runtypes").Constraint<NumberRunType, number, unknown>;
    unit: Union<[Literal<"minute">, Literal<"day">]>;
}, false>;

export type Duration = Static<typeof Duration>;

type Todoist = {
    Token: string
} 

export async function main(resource: Todoist, tasks: {
    args:  {
        content: string;
        description?: string;
        projectId?: string;
        sectionId?: string;
        parentId?: string;
        order?: number;
        labels?: string[];
        priority?: number;
        dueLang?: string;
        assigneeId?: string;
        dueString?: string;
    } & RequireOneOrNone<{
        dueDate?: string;
        dueDatetime?: string;
    }> & RequireAllOrNone<{
        duration?: Duration['amount'];
        durationUnit?: Duration['unit'];
    }>
    requestId?: string
}[]) {
    const api = new TodoistApi(resource.Token)
    const taskPromises = tasks.map((task) => api.addTask(task.args, task.requestId));
    const taskResponses = await Promise.all(taskPromises);
    return taskResponses;
}
