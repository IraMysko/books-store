const SomeFunk = () => {

    const users = ['Ira', 'Sonik', 'Vlad'];
    const userObject = users.map((item, index) => {
        return { name: item, id: index }
    });

    //     0: {name: "Ira", id: 0}
    // 1: {name: "Sonik", id: 1}
    // 2: {name: "Vlad", id: 2


    // const cat = {
    //     name: 'Sonic',
    //     age: 1,
    // };

    // cat.name cat = "name"
    // cat['name'] cat = { 'name'}

    // const name = 'vlad';
    // cat[name] => cat.vlad cat={name}

    // const someChanges = userObject.reduce((acc, el) => {
    //      acc[el.name] = el.id;

    //     return acc;
    // }, {})



    const getName = (): any => {
        let name = 'Vlad'
        console.log(`Hello ${name}`);
    };

    // let name = 'Ira';

    getName();

    let fullName = 'Ira Mysko';
    const getFullName = () => console.log(`Hi ${fullName}`);
    fullName = 'Sonik'

    const greetings = () => {
        let name = 'Ira';

        return function () {
            console.log(`Hi ${name}`);
        };
    };

    const func = greetings();
    func();

    getFullName()
    console.log('userObject', userObject);

    return (
        <div>Hi</div>
    )
}

export default SomeFunk;