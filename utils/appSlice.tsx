//will hold user details that will be passed from firebase
//photourl, id, name, (_app.tsx)
//will hold setter function for setting user

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type _user = {
  uid: string;
  name: string;
  email: string;
};

type _state = {
  auth: boolean;
  user?: _user | null;
};

const initialState: _state = {
  auth: false,
  user: null,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setUser: (state: _state, action: PayloadAction<_user>) => {
      state = { auth: true, user: action.payload };
    },
  },
});

const appActions = appSlice.actions;

export { appActions, appSlice };
