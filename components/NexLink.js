import Link from 'next/link';


export { NexLink };

function NexLink({ href, children, ...props }) {
    return (
        <>
        <Link href={href}>
            <span>
            <Link  href={""}{...props}>
                {children}
            </Link>
            </span>
        </Link>
        </>
    );
}