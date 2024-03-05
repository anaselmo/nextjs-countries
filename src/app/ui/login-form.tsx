'use client';

import { inter } from '@ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { useAuthStore } from '@/app/lib/store';
import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginFormInput } from "@/app/lib/store";

export default function LoginForm() {
  const { error, loading, signIn } = useAuthStore()
  const { register, handleSubmit } = useForm<ILoginFormInput>()
  const onSubmit: SubmitHandler<ILoginFormInput> = async (data) => await signIn(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${inter.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-600"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
                {...register("email")}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-600" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                placeholder="Enter password"
                required
                minLength={6}
                {...register("password")}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-600" />
            </div>
          </div>
        </div>
        <LoginButton pending={loading} />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {error && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{error}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

interface LoginButtonProps {
  pending: boolean;
}

function LoginButton({pending}: LoginButtonProps) {
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
