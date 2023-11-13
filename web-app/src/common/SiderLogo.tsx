import config from "@/config";

const SiderLogo: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 18,
        fontWeight: 400,
      }}
    >
      {config.name}
    </div>
  );
};

export default SiderLogo;
