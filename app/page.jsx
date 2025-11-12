import Link from 'next/link';
import Image from 'next/image';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Predrag Rajković</h1>
                <p className="mb-6 text-lg">
                    Professor of Mathematics, University of Niš
                </p>
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="btn btn-lg sm:min-w-64">
                    Read the Docs
                </Link>
                <Link href="/">
                <Image src='images/image1.jpg' alt="Netlify logo" />
                </Link>
                <Image src='images/image2.jpg' alt="Netlify logo" />
                <Image src='images/image3.jpg' alt="Netlify logo" />
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <RandomQuote />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    return;
}
