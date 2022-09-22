import { useState, useRef } from "react";

import {
  IGoogleReCaptcha,
  RECAPTCHA_KEY,
  isBrowser,
} from "../helper/definition";

interface IGoogleReCaptchaOptions {
  siteKey: string;
  languange?: string;
}

interface IGoogleReCaptchaV2HookReturn {
  reCaptchaResponseToken?: string;
  reCaptchaBadge?: JSX.Element;
  executeReCaptcha: () => Promise<string>;
  resetReCaptcha: () => void;
}

type TGoogleReCaptchaV2Hook = (options: IGoogleReCaptchaOptions) => void;
// ) => IGoogleReCaptchaV2HookReturn;

const ERROR_SCRIPT_NOT_AVAILABLE = "Google ReCaptcha is Not Available";
const GOOGLE_RECAPTCHA_V3_SCRIPT = "https://www.google.com/recaptcha/api.js";
const SCRIPT_ID = "google-recaptcha-v2";
const RESPONSE_TIME_DELAY = 2000;

export const ERROR_TOKEN_FETCH_FAILED =
  "Failed to get the Google ReCaptcha token";

export const useGoogleRecaptchaV2: TGoogleReCaptchaV2Hook = ({
  siteKey,
  languange,
}) => {
  const [token, setToken] = useState<string>();
  const executionTimeoutIDRef = useRef<number>();

  const resetCaptcha = () => {};
};

export default useGoogleRecaptchaV2;
