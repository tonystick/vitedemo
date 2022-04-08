import request from '@/core/request';

export const login = () =>
  request.request({
    url: '/login',
    method: 'post',
  });

export const user = () =>
  request.request({
    url: '/user',
    method: 'get',
  });
