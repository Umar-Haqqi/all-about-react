function MyName() {    // function should be uppercase with or without vite
    const userName = "Umar haqqui";

    return (
        <h2>Username: {userName}</h2>   // anything inside {} will be treated as JS variable
    )
}
export default MyName;

// --- recommended
// file/component name to be uppercase is good practice
// in vite extension jsx is also a good practice
// in create-react-app file extension be js or jsx choice

// --- thing about variable in react
// {} is called expression / evaluated expression
// {if(true) userName} will not work,
// evaluated expression is final outcome