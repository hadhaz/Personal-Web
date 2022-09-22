export const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export const isBrowser = typeof window !== "undefined";
export interface IGoogleReCaptcha {
  execute: () => void;
  reset: () => void;
  getResponse: () => string;
}
export interface IProjectWindow extends Window {
  grecaptcha: IGoogleReCaptcha;
  grecaptchaTokenResponse: (token: string) => void;
  grecaptchaExpired: () => void;
}
