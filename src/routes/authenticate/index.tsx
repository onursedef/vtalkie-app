import { getCurrentWindow } from "@tauri-apps/api/window";
import {createFileRoute} from '@tanstack/react-router'
import {useEffect, useState} from "react";
import {EyeSlashIcon} from "@heroicons/react/24/outline";
import {EyeIcon} from "@heroicons/react/24/outline";


export const Route = createFileRoute('/authenticate/')({
    component: RouteComponent,
})

function RouteComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState<string>('');

    const appWindow = getCurrentWindow();

    useEffect(() => {
        document.getElementById("titlebar-minimize")?.addEventListener('click', () => appWindow.minimize());
        document.getElementById("titlebar-close")?.addEventListener('click', () => appWindow.close());
    }, [appWindow])

    return (
        <div className="select-none flex flex-col w-screen h-screen bg-neutral-900">
            <div data-tauri-drag-region="true" id="titlebar"
                 className="inline-flex justify-between items-center border-b border-neutral-800">
                <p className="pl-4 py-2.5 text-neutral-400 text-sm font-krone-one tracking-wide">vtalkie</p>
                <div className="h-full inline-flex">
                    <button
                        id="titlebar-minimize"
                        className="inline-flex items-center justify-center h-8 w-12 hover:bg-neutral-800 transition-colors duration-200">
                        <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/>
                        </svg>
                    </button>
                    <button
                        id="titlebar-close"
                        className="group inline-flex items-center justify-center h-8 w-12 hover:bg-red-500 transition-colors duration-200">
                        <svg className="w-4 h-4 text-neutral-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-col flex-grow items-center justify-center px-6 pt-4 pb-8 font-nunito">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back</h1>
                        <p className="mt-2 text-sm text-neutral-400">Sign in to your account</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-300 ml-1">Server URL</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-neutral-800/50 text-white rounded-lg border border-neutral-700
                           placeholder:text-neutral-500
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
                           transition-all duration-200"
                                    placeholder="https://your-server.com"
                                    autoComplete={"off"}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2.5 bg-neutral-800/50 text-white rounded-lg border border-neutral-700
                           placeholder:text-neutral-500
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
                           transition-all duration-200"
                                    placeholder="Enter your email"
                                    autoComplete={"off"}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-300 ml-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full px-4 py-2.5 bg-neutral-800/50 text-white rounded-lg border border-neutral-700
                             placeholder:text-neutral-500
                             focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
                             transition-all duration-200"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {password?.length > 0 ? (
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-400
                             hover:text-neutral-300 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <EyeSlashIcon className='size-5' />
                                            ) : (
                                                <EyeIcon className={'size-5'} />
                                            )}
                                        </button>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg
                       font-medium transform transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
                       focus:ring-offset-neutral-900"
                        >
                            Sign in
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-neutral-800"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-neutral-900 text-neutral-400">
                  Don't have an account?
                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2.5 rounded-lg
                       font-medium transform transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2
                       focus:ring-offset-neutral-900"
                        >
                            Register new account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
