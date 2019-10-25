import React from "react";
import Wrapper from "./components/Title";
import StrainsCard from "./components/StrainsCard";
import strains from "./strains.json";
//Strains Cards Created for Product info name, image, type, cbd %//
function App() {
    return ( <Wrapper>
        <Title>Strains List</Title>
        <StrainsCard
        name={strains[0].name}
        image={strains[0].image}
        type={strains[0].type}
        cbd={strains[0].cbd}
        />
        <StrainsCard
        name={strains[1].name}
        image={strains[1].image}
        type={strains[1].type}
        cbd={strains[1].cbd}
        />
        <StrainsCard
        name={strains[2].name}
        image={strains[2].image}
        type={strains[2].type}
        cbd={strains[2].cbd}
        />
        <StrainsCard
        name={strains[3].name}
        image={strains[3].image}
        type={strains[3].type}
        cbd={strains[3].cbd}
        />
        <StrainsCard
        name={strains[4].name}
        image={strains[4].image}
        type={strains[4].type}
        cbd={strains[4].cbd}
        />
        <StrainsCard
        name={strains[5].name}
        image={strains[5].image}
        type={strains[5].type}
        cbd={strains[5].cbd}
        />
        <StrainsCard
        name={strains[6].name}
        image={strains[6].image}
        type={strains[6].type}
        cbd={strains[6].cbd}
        />
        <StrainsCard
        name={strains[7].name}
        image={strains[7].image}
        type={strains[7].type}
        cbd={strains[7].cbd}
        />
        <StrainsCard
        name={strains[8].name}
        image={strains[8].image}
        type={strains[8].type}
        cbd={strains[8].cbd}
        />
        <StrainsCard
        name={strains[9].name}
        image={strains[9].image}
        type={strains[9].type}
        cbd={strains[9].cbd}
        />
    </Wrapper>
    );
}
export default App;