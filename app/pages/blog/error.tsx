'use client';

export default function ErrorWrapper({error}: {error: Error}) {
    return <span>Ops.. {error.message}</span>;
}