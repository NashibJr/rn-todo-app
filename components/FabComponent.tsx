import React from "react";
import { FAB, Portal } from "react-native-paper";

const FabComponent = () => {
  const [state, setState] = React.useState<{ open: boolean }>({ open: false });
  const handleChangeOpen = ({ open }: any) => setState({ open });

  return (
    <Portal>
      <FAB.Group
        open={state.open}
        icon={state.open ? "close" : "plus"}
        onStateChange={handleChangeOpen}
        visible
        actions={[{ icon: "plus", label: "Add task", onPress: () => {} }]}
        fabStyle={{ marginBottom: 100 }}
      />
    </Portal>
  );
};

export default FabComponent;
