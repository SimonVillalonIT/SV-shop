import { cn } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

interface SocialNetworkInterface {
  icon: typeof TwitterLogoIcon;
  className?: string;
}

const SocialNetwork = ({ icon, className}: SocialNetworkInterface) => {
  const Icon = icon;
  return (
    <span
      className={cn(
        className,
        "bg-gradient-to-r from-purple to-rose rounded-xl p-1",
      )}
    >
      <Icon color="white" width={48} height={48} />
    </span>
  );
};

export default SocialNetwork;
