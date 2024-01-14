import {
  Avatar as UIAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function CustomAvatar() {
  return (
    <UIAvatar>
      <AvatarImage src="" />
      <AvatarFallback>+</AvatarFallback>
    </UIAvatar>
  );
}
