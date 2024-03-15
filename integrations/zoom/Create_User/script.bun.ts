import zoomApi from 'zoomapi';
import type { resource } from '../resource';


export async function main(resource: resource, user: {
    action: 'create' | 'autoCreate' | 'custCreate' | 'ssoCreate';
    user_info?: {
        email: string;
        /**
         * 1 - Basic.
         * 2 - Licensed.
         * 3 - On-prem.
         */
        type: 1 | 2 | 3;
        first_name?: string;
        last_name?: string;
        password?: string;
    };
}) {
    const client = zoomApi(resource);
    const createdUser = await client.users.CreateUser(user);
    return createdUser;

}
