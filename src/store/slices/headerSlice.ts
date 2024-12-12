import { HeaderType } from "@/src/components/layouts/Header/HeaderType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderState {
  type: HeaderType;
  actions?: {
    onBackPress?: () => void;
    onSavePress?: () => void;
    onCancelPress?: () => void;
  };
}

const initialState: HeaderState = {
  type: HeaderType.Default,
  actions: undefined
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderType: (state, action: PayloadAction<HeaderType>) => {
      state.type = action.payload;
    },
    setHeaderActions: (
      state,
      action: PayloadAction<HeaderState["actions"]>
    ) => {
      state.actions = action.payload;
    },
    resetHeader: () => initialState
  }
});

export const { setHeaderType, setHeaderActions, resetHeader } =
  headerSlice.actions;

export default headerSlice.reducer;
