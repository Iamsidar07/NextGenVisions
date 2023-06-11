import { Iform } from '@/types';
import React, { useState } from 'react'

interface SelectProps  {
    label:string;
    options: string[];
    name: keyof Iform;
    form:Iform;
    setForm: React.Dispatch<React.SetStateAction<Iform>>;
}

const Select = ({label, options, name, form, setForm}: SelectProps) => {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    return (
        <div className="relative w-full">
            <p>{label}:</p>
            <select
                value={form[`${name}`]}
                onChange={handleSelectChange}
                name={name}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                {
                    options.map((option,i) => (<option key={i}>{option}</option>))
                }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                
            </div>
        </div>
    )
}

export default Select