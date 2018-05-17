/**
 * Initialize Content Script Listeners
 */

import { ConnectListener } from './connect-listener';
import { RuntimeListener } from './runtime-listener';

console.log('Content Script Initialized!');

const connectListener = new ConnectListener();
const runtimeListener = new RuntimeListener();
