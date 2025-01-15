import { Icon } from "@iconify/react";

function Sidebar() {
  const handleClick = () => {
    alert("Clicou");
  };

  return (
    <>
      <div className="bg-red-200 flex md:flex-col w-full h-full justify-between p-4">
        <ul className="md:flex md:flex-col items-start gap-y-4">
          <button onClick={handleClick}>
            <li>
              <Icon
                className="md:hidden"
                icon="fluent:cube-add-20-regular"
                width="20"
                height="20"
              />
              <button className="hidden md:flex">
                <Icon
                  icon="fluent:cube-add-20-regular"
                  width="20"
                  height="20"
                />
                <p>Cadastrar produto</p>
              </button>
            </li>
          </button>
          <button onClick={handleClick}>
            <li>
              <div>
                <Icon icon="el:list-alt" width="20" height="20" />
                <p className="hidden md:flex">Estoque</p>
              </div>
            </li>
          </button>
        </ul>

        <div>
          <button onClick={handleClick}>
            <Icon className="text-3xl" icon="ix:light-dark" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
