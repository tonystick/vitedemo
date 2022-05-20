import { post, get } from '@/core/request';
import { RootModel, Person } from '@/models';

export const login = (name: string, password: string) =>
  post<RootModel<Person>>({
    url: '/login',
    data: { name, password },
  });

export const user = () =>
  get({
    url: '/user',
  });
