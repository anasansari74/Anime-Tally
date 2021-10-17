import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import StatusCard from "../components/StatusPageComps/StatusCard";
import useStore, { StatusDataType } from "../store";

const StatusPageDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));

  grid-gap: 0.5rem;

  justify-items: center;
`;

export default function StatusPage() {
  let { status } = useParams() as any;

  const statusToFind = () => {
    let storeStatus = "";

    if (status === "Plan to Watch") {
      storeStatus = "planToWatch";
    } else if (status === "Currently Watching") {
      storeStatus = "watching";
    } else if (status === "Completed") {
      storeStatus = "completed";
    } else {
      storeStatus = "dropped";
    }

    return storeStatus;
  };

  const statusForStore = statusToFind();
  console.log("status:", statusForStore);

  const findArrayToDisplay = status => {
    let data: StatusDataType[] = [];
    if (status === "planToWatch") {
      data = useStore(store => store.planToWatch);
    } else if (status === "watching") {
      data = useStore(store => store.watching);
    } else if (status === "completed") {
      data = useStore(store => store.completed);
    } else {
      data = useStore(store => store.dropped);
    }
    return data;
  };

  const arrayToDisplay = findArrayToDisplay(statusForStore);

  return (
    <StatusPageDiv>
      {arrayToDisplay.length ? (
        <>
          {arrayToDisplay.map((show, index) => (
            <StatusCard show={show} key={index} />
          ))}
        </>
      ) : (
        <h3>You currently have no show(s) set as "{status}"!</h3>
      )}
    </StatusPageDiv>
  );
}
