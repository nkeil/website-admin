import Link from "next/link";

interface Props {
  links: {
    text: string;
    href: string;
  }[];
}
export default async function CenterNav({ links }: Props) {
  return (
    <div className="w-full">
      <div className="m-auto w-min">
        {links.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
