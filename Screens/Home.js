// import { useState } from'react';
// import { View, SafeAreaView, Text, FlatList } from 'react-native';
// import { COLORS, NFTData } from '../constants';
// import { NFTCard, HomeHeader, FocusedStatusBar } from '../components/index';

// export default function Home () {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <FocusedStatusBar background={COLORS.primary}/>
//       <View style={{flex: 1}}>
//         <View style={{zindex: 0}}>
//           <FlatList
//             data={NFTData}
//             keyExtractor={(item) => item.id}
//             renderItem={({item}) => 
//               <NFTCard data={item} />
//             }
//             showsHorizontalScrollIndicator={false}
//             ListHeaderComponent={<HomeHeader/>}
//           />
//         </View>
//         <View style={{position: "absolute", top: 0, bottom: 0, right: 0, left: 0, zIndex: -1}}>
//           <View style={{height: 300, backgroundColor: COLORS.primary}}>
//           </View>
//           <View style={{ flex: 1, backgroundColor: COLORS.white }}>
//           </View>

//         </View>
//       </View>
//     </SafeAreaView>
//   )
// };

import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components/index";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;