/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from 'msw/node';
import LoginHandlers from './login';

export default setupServer(...LoginHandlers);
