export default function Footer() {
  return (
    <div
      className="relative h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[500px] w-full">
        <FooterContent />
      </div>
    </div>
  );
}

export const FooterContent = () => {
  const links = [
    { title: "pages", links: ["home", "about", "contact"] },
    { title: "social", links: ["facebook", "twitter", "instagram"] },
  ];
  return (
    <div className="h-[500px] w-full flex flex-col  items-center justify-between bg-red-900 px-20 py-5">
      <div className="w-full flex flex-row justify-start items-center self-start gap-5">
        {links.map((item) => {
          return (
            <div key={item.title}>
              <div className="my-2">
                <p className="font-inter text-xl font-bold capitalize text-white">
                  {item.title}
                </p>
              </div>
              <ul>
                {item.links.map((link) => {
                  return (
                    <li className="capitalize text-sm text-red-50">{link}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex h-[20vw] flex-row justify-start  items-end w-full">
        <p className="font-doto uppercase self-end text-nowrap text-[150px] h-[150px] font-extrabold my-5 text-white">
          Static Footer
        </p>
      </div>
      <div className="flex flex-row justify-end items-center w-full self-end">
        <p className="font-inter text-sm text-white">@Copyright.</p>
      </div>
    </div>
  );
};
