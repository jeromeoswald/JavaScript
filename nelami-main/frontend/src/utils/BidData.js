import nanoId from "./RandomIdGen";

const getBidTimeDropList = (data) => {
  console.log(data, "check");
  return data?.bidTimeList?.map((day) => {
    return <option key={nanoId()} value={day}>{day} {day === 1 ? "Day" : "Days"}</option>
  
  }
  )
}

export default getBidTimeDropList;

