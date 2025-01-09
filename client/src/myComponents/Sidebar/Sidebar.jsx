function Sidebar() {
  const handleClick = () => {
    alert("Clicou");
  };

  return (
    <>
      <div className="bg-red-200 flex flex-col w-full h-full justify-between p-4">
        <ul className="flex flex-col items-start gap-y-4">
          <button onClick={handleClick}>
            <li>Cadastrar proutos</li>
          </button>
          <button onClick={handleClick}>
            <li>Produtos</li>
          </button>
        </ul>

        <div>
          <button onClick={handleClick}>
            <p>Tema escuro</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
