'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}> 
            {pending ? 'Submitting... ' c:\Users\hkm\Downloads\01-starting-project: 'Share Meal'}
        </button>
    );
}