import './ExploreContainer.css';
import React from 'react';
import { useState } from 'react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [val, setVal] = useState(0);
  const [vasel, setVasel] = useState(" ");
  const [vase2, setVase2] = useState(" ");
  const [vares, setVares] = useState(" ");

  const change = (e: any) => {
    setVares(e.target.value)
    setVase2(e.target.value);
  }

  const change2 = (e: any) => {

    setVase2(e.target.value);
  }

  const change3 = (e: any) => {
    setVal(e.target.value)
  }

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    setVasel(e.target.value);

  };

  function myResult() {

    var result;
      
      if (vasel === 'm' && vase2 === 'km') {
        result = val * 0.001;
        setVares(result.toString());
      } else if (vasel === 'm' && vase2 === 'cm') {
        result = val * 100;
        setVares(result.toString());
      } else if (vasel === 'mm' && vase2 === 'mm') {
        result = val;
        setVares(result.toString());
      } else if (vasel === 'm' && vase2 === 'hm') {
        result = val / 100;
        setVares(result.toString());
      }

    if (vasel === 'km' && vase2 === 'm') {
      result = val * 1000;
      setVares(result.toString());
    } else if (vasel === 'km' && vase2 === 'mm') {
      result = val * 1000000;
      setVares(result.toString());
    } else if (vasel === 'km' && vase2 === 'cm') {
      result = val * 100000;
      setVares(result.toString());
  }

  if (vasel === 'km' && vase2 === 'dm') {
    result = val * 10000;
    setVares(result.toString());
  } else if (vasel === 'km' && vase2 === 'dam') {
    result = val * 100;
    setVares(result.toString());
  } else if (vasel === 'km' && vase2 === 'hm') {
    result = val * 10;
    setVares(result.toString());
}

    if (vasel === 'cm' && vase2 === 'm') {
      result = val / 100;
      setVares(result.toString());
    } else if (vasel === 'cm' && vase2 === 'mm') {
      result = val * 10;
      setVares(result.toString());
    } else if (vasel === 'cm' && vase2 === 'km') {
      result = val / 100000;
      setVares(result.toString());
  }

  if (vasel === 'cm' && vase2 === 'dm') {
    result = val / 10;
    setVares(result.toString());
  } else if (vasel === 'cm' && vase2 === 'dam') {
    result = val / 1000;
    setVares(result.toString());
  } else if (vasel === 'cm' && vase2 === 'hm') {
    result = val / 10000;
    setVares(result.toString());
}

    if (vasel === 'm' && vase2 === 'mm') {
      result = val * 1000;
      setVares(result.toString());
    } else if (vasel === 'm' && vase2 === 'dm') {
      result = val * 10;
      setVares(result.toString());
    } else if (vasel === 'm' && vase2 === 'dam') {
      result = val / 10;
      setVares(result.toString());
  }

    if (vasel === 'm' && vase2 === 'm') {
      result = val;
      setVares(result.toString());
    } else if (vasel === 'cm' && vase2 === 'cm') {
      result = val;
      setVares(result.toString());
    } else if (vasel === 'dm' && vase2 === 'dm') {
      result = val;
      setVares(result.toString());
  }

  if (vasel === 'dam' && vase2 === 'dam') {
    result = val;
    setVares(result.toString());
  } else if (vasel === 'hm' && vase2 === 'hm') {
    result = val;
    setVares(result.toString());
  } else if (vasel === 'km' && vase2 === 'km') {
    result = val;
    setVares(result.toString());
}

//mm//
if (vasel === 'mm' && vase2 === 'dm') {
  result = val / 100;
  setVares(result.toString());
} else if (vasel === 'mm' && vase2 === 'cm') {
  result = val / 10;
  setVares(result.toString());
} else if (vasel === 'mm' && vase2 === 'm') {
  result = val / 1000;
  setVares(result.toString());
}

if (vasel === 'mm' && vase2 === 'dam') {
  result = val / 10000;
  setVares(result.toString());
} else if (vasel === 'mm' && vase2 === 'hm') {
  result = val / 100000;
  setVares(result.toString());
} else if (vasel === 'mm' && vase2 === 'km') {
  result = val / 1000000;
  setVares(result.toString());
}
///

//dm//
if (vasel === 'dm' && vase2 === 'mm') {
  result = val * 100;
  setVares(result.toString());
} else if (vasel === 'dm' && vase2 === 'cm') {
  result = val * 10;
  setVares(result.toString());
} else if (vasel === 'dm' && vase2 === 'm') {
  result = val / 10;
  setVares(result.toString());
}

if (vasel === 'dm' && vase2 === 'dam') {
  result = val / 100;
  setVares(result.toString());
} else if (vasel === 'dm' && vase2 === 'hm') {
  result = val / 1000;
  setVares(result.toString());
} else if (vasel === 'dm' && vase2 === 'km') {
  result = val / 10000;
  setVares(result.toString());
}
///

//dam//
if (vasel === 'dam' && vase2 === 'mm') {
  result = val * 10000;
  setVares(result.toString());
} else if (vasel === 'dam' && vase2 === 'cm') {
  result = val * 1000;
  setVares(result.toString());
} else if (vasel === 'dam' && vase2 === 'dm') {
  result = val * 100;
  setVares(result.toString());
}

if (vasel === 'dam' && vase2 === 'm') {
  result = val * 10;
  setVares(result.toString());
} else if (vasel === 'dam' && vase2 === 'hm') {
  result = val / 10;
  setVares(result.toString());
} else if (vasel === 'dam' && vase2 === 'km') {
  result = val / 100;
  setVares(result.toString());
}
///

//hm//
if (vasel === 'hm' && vase2 === 'mm') {
  result = val * 100000;
  setVares(result.toString());
} else if (vasel === 'hm' && vase2 === 'cm') {
  result = val * 10000;
  setVares(result.toString());
} else if (vasel === 'hm' && vase2 === 'dm') {
  result = val * 1000;
  setVares(result.toString());
}

if (vasel === 'hm' && vase2 === 'm') {
  result = val * 100;
  setVares(result.toString());
} else if (vasel === 'hm' && vase2 === 'dam') {
  result = val * 10;
  setVares(result.toString());
} else if (vasel === 'hm' && vase2 === 'km') {
  result = val / 10;
  setVares(result.toString());
}
///

  };

  const Click = () => {
    myResult()
  }
  
  return (
    <>
    <div id="container">
      <input id='inp' onChange={change3} value={val} type='number'></input>
      <select id='sel1' value={vasel} onChange={handleDropdownChange}>
        <option>
          -
        </option>
      <option value="mm">
          mm
        </option>
        <option value="cm">
          cm
        </option>
        <option value="dm">
          dm
        </option>
        <option value="m">
          m
        </option>
        <option value="dam">
          dam
        </option>
        <option value="hm">
          hm
        </option>
        <option value="km">
          km
        </option>
        </select>
    </div>
     <div id='cont'>
     <select id='sel2' value={vase2} onChange={change2}>
     <option>
          -
        </option>
     <option value="mm">
          mm
        </option>
        <option value="cm">
          cm
        </option>
        <option value="dm">
          dm
        </option>
        <option value="m">
          m
        </option>
        <option value="dam">
          dam
        </option>
        <option value="hm">
          hm
        </option>
        <option value="km">
          km
        </option>
</select>
</div>

<div id='but'>
 <button id='but2' onClick={Click}>Convert</button>
</div>

<h1 id='inp2'>
  {vares}
</h1>

</>
  );
};

export default ExploreContainer;
