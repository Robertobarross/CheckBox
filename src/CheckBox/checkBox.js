import React, { useState } from "react";
import { Button, View } from "react-native";
import { CheckBox } from "react-native-elements";

export default function Check() {
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    const testeCheck = () => {
      setCheck(true);
      setCheck1(false);
      setCheck2(false);
    }

    const testeCheck1 = () => {
      setCheck(false);
      setCheck1(true);
      setCheck2(false);
    }

    const testeCheck2 = () => {
      setCheck(false);
      setCheck1(false);
      setCheck2(true);
    }

    const click = () => {
        if(check === true){
            alert("CORRETO! Parabéns...");
        }else{
            false
            alert("Errado! Tente novamente.");
        }
    };

    return (
        <View>
            <CheckBox 
              title="Check" 
              checked={check} 
              onPress={() => testeCheck(!check)} 
            />

           <CheckBox 
              title="Check1" 
              checked={check1} 
              onPress={() => testeCheck1(!check1)}
            />

           <CheckBox
              title="Check2" 
              checked={check2} 
              onPress={() => testeCheck2(!check2)}
            />

            <Button 
              title="Click"
              onPress={click}
            />
        </View>
    )
}
