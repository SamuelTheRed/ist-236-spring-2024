import List from "../components/List/List";
import { REPORTS } from "../data/dummy_data";

function  WorldNewsReportsScreen() {
  const type = "World News";
  const displayedReports = REPORTS.filter((reportItem) => {
    return reportItem.type === type;
  });

  return <List items={displayedReports} />;
}

export default WorldNewsReportsScreen;
