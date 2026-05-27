import logo from "@/assets/yc-logo.png";

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2">
      <img
        src={logo}
        alt="YC and Me logo"
        width={size}
        height={size}
        className="rounded-sm"
        style={{ width: size, height: size }}
      />
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        <span className="text-muted-foreground font-normal">and</span> Me
      </span>
    </span>
  );
}
