import "./App.css";
// import MyButton from "./component/MyButton.jsx";
// import UserCard from "./component/UserCard.jsx";
function App() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const renderProductLists = products.map((product) => {
    return (
      <li key={product.id}>
        <h2
          style={{
            color: product.isFruit ? "red" : "green",
          }}
        >
          {product.title}
        </h2>
      </li>
    );
  });

  return (
    <>
      <h1>Welcome to React</h1>
      <ul>{renderProductLists}</ul>
    </>
  );
}

export default App;
