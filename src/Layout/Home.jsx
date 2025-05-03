import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import CoffeeCardTwo from './CoffeeCardTwo';

const Home = () => {
    const coffees = useLoaderData()
    const [useCoffees, setUseCoffees] = useState(coffees)

    return (
        <div >
            <div className='grid grid-cols-2 mt-5 gap-5'>
                {
                    useCoffees.map(coffee => <CoffeeCardTwo
                        useCoffees={useCoffees}
                        setUseCoffees={setUseCoffees}
                        coffee={coffee}>
                        </CoffeeCardTwo>)
                }
            </div>
        </div>
    );
};

export default Home;