// src/mocks/handlers.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';
import LoginHandlers from './login';

export default setupWorker(...LoginHandlers);
