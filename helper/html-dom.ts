import { IProjectWindow, isBrowser } from "./definition";

export const getProjectWindow = () => isBrowser ? window : undefined;