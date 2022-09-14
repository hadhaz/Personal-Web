import { createRef, useRef } from "react";
import { Grid } from "@mui/material";
import { TouchApp } from "@mui/icons-material";
import React, { useState } from "react";
import validator from "validator";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";

type State = {
  email: string;
  name: string;
  phone: string;
  organization: string;
  messages: string;
};

const initialState = {
  email: "",
  name: "",
  phone: "",
  organization: "",
  messages: "",
};

type ErrorState = {
  emailError: boolean;
  nameError: boolean;
  phoneError: boolean;
  organizationError: boolean;
};

const initialErrorState = {
  emailError: false,
  nameError: false,
  phoneError: false,
  organizationError: false,
};

const Form = () => {
  const [state, setState] = useState<State>(initialState);
  const [error, setError] = useState<ErrorState>(initialErrorState);
  const recaptchaRef = createRef<ReCAPTCHA>();

  function handleChange() {}

  function nameChangehandler(e: React.ChangeEvent<HTMLInputElement>) {
    setError((val: ErrorState) => ({ ...val, nameError: false }));
    setState((val: State) => ({ ...val, name: e.target.value }));
  }

  function emailChangehandler(e: React.ChangeEvent<HTMLInputElement>) {
    setError((val: ErrorState) => ({ ...val, emailError: false }));
    setState((val: State) => ({ ...val, email: e.target.value }));
  }

  function phoneChangehandler(e: React.ChangeEvent<HTMLInputElement>) {
    setError((val: ErrorState) => ({ ...val, phoneError: false }));
    setState((val: State) => ({ ...val, phone: e.target.value }));
  }

  function organizationChangehandler(e: React.ChangeEvent<HTMLInputElement>) {
    setError((val: ErrorState) => ({ ...val, organizationError: false }));
    setState((val: State) => ({ ...val, organization: e.target.value }));
  }

  function messagesChangehandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setState((val: State) => ({ ...val, messages: e.target.value }));
  }

  function nameOnBlurHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    if (!validator.isEmpty(name)) {
      setError((val: ErrorState) => ({ ...val, nameError: true }));
    }
  }

  function emailOnBlurHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    if (!validator.isEmail(email)) {
      setError((val: ErrorState) => ({ ...val, emailError: true }));
    }
  }

  function organizationOnBlurHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const organization = e.target.value;
    if (organization.trim().length === 0) {
      setError((val: ErrorState) => ({ ...val, organizationError: true }));
    }
  }

  function phoneOnBlurHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const phone = e.target.value;
    if (!validator.isMobilePhone(phone) || phone.trim().length === 0) {
      setError((val: ErrorState) => ({ ...val, phoneError: true }));
    }
  }

  function onReCAPTCHAChange() {}

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();
    const message = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      organization: state.organization,
      messages: state.messages,
    };

    fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    }).then(() => alert("Email sent"));

    setState({
      name: "",
      email: "",
      phone: "",
      organization: "",
      messages: "",
    });
  }

  return (
    <Grid container item className='dark:bg-slate-800'>
      <div className='w-full py-8 md:py-12'>
        <h1 className='text-center text-xl md:text-2xl font-semibold'>
          Get in Touch <TouchApp />
        </h1>
      </div>
      <div className='w-full pb-10 bg-hero-bottom dark:bg-hero-dark-bottom'>
        <form
          className='w-[95%] md:w-[500px] mx-auto flex flex-col gap-2'
          onSubmit={submitFormHandler}
        >
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='name'
              className={error.nameError ? "text-red-500" : ""}
            >
              Name {error.nameError && "Required"}
            </label>
            <input
              type='text'
              id='name'
              className={`border-2 bg-transparent ${
                error.nameError
                  ? "border-red-500"
                  : "border-yellow-custom dark:border-blue-gray"
              }  w-full outline-none py-1 px-2`}
              placeholder='Achmad Hadzami Setiawan'
              onChange={nameChangehandler}
              onBlur={nameOnBlurHandler}
              required
              value={state.name}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='phone'
              className={error.phoneError ? "text-red-500" : ""}
            >
              Phone {error.phoneError && "is Not Valid"}
            </label>
            <input
              type='text'
              id='phone'
              className={`${
                error.phoneError
                  ? "border-red-500"
                  : "border-yellow-custom dark:border-blue-gray"
              } bg-transparent border-2 w-full outline-none p-1 px-2`}
              placeholder='+628123456789'
              onChange={phoneChangehandler}
              onBlur={phoneOnBlurHandler}
              required
              value={state.phone}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='email'
              className={error.emailError ? "text-red-500" : ""}
            >
              Email {error.emailError && "is Not Valid"}
            </label>
            <input
              type='email'
              id='email'
              className={`${
                error.emailError
                  ? "border-red-500"
                  : "border-yellow-custom dark:border-blue-gray"
              } bg-transparent border-2 w-full outline-none p-1 px-2`}
              placeholder='hadzami@example.com'
              onChange={emailChangehandler}
              onBlur={emailOnBlurHandler}
              required
              value={state.email}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='institution'
              className={error.organizationError ? "text-red-500" : ""}
            >
              Institution/Organization {error.organizationError && "Required"}
            </label>
            <input
              type='text'
              id='institution'
              className={` ${
                error.organizationError
                  ? "border-red-500"
                  : "border-yellow-custom dark:border-blue-gray"
              } bg-transparent border-2 w-full outline-none p-1 px-2`}
              placeholder='XYZ Universitas Gadjah Mada'
              onChange={organizationChangehandler}
              onBlur={organizationOnBlurHandler}
              required
              value={state.organization}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='text'>Additional Information</label>
            <textarea
              id='text'
              onChange={messagesChangehandler}
              value={state.messages}
              className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2 h-40'
              placeholder='I will hire your for position x with jobdesc y'
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={onReCAPTCHAChange}
            ref={recaptchaRef}
          >
            <input
              onChange={handleChange}
              required
              type='email'
              name='email'
              placeholder='Email'
            />
          </ReCAPTCHA>
          <button
            type='submit'
            className='bg-yellow-custom dark:bg-blue-gray p-2 dark:text-sky-900 font-bold rounded-sm mt-2'
          >
            Send to Hadzami
          </button>
        </form>
      </div>
    </Grid>
  );
};

export default Form;
