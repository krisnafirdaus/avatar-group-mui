import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function TotalAvatars() {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
      name: "Remy Sharp",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
      name: "Travis Howard",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
      name: "Agnes Walker",
    },
  ];

  return (
    <AvatarGroup
      total={8}
      sx={{
        "& .MuiAvatar-root": {
          width: "100px",
          height: "100px",
          fontSize: "40px",
          marginLeft: "-30px",
        },
        "& .css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar": {
          zIndex: data.length + 1,
          background: "#E7EAF4",
          color: "#767B87",
        },
        "& .css-rfuczr": {
          zIndex: data.length + 1,
          background: "#E7EAF4",
          color: "#767B87",
        },
      }}
    >
      {data.map((x) => {
        return (
          <Avatar key={x.id} alt={x.name} src={x.image} sx={{ zIndex: x.id }} />
        );
      })}
    </AvatarGroup>
  );
}
