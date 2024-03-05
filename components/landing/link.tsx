import { cn } from "@/lib/utils";

interface LinkProps extends Partial<HTMLAnchorElement> {
  text: string;
}

const Link = (props: LinkProps) => {
  return (
    <a className={cn(props.className, "landing-link cursor-pointer px-4 text-sm font-semibold text-[#343A40]")} href={props.href}>
      {props.text}
    </a>
  );
};

export default Link;
