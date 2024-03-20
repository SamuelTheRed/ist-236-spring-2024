import List from "../components/List/List";
import { REPORTS } from "../data/dummy_data";

function USNewsReportsScreen() {
  const type = "US News";
  const displayedReports = REPORTS.filter((reportItem) => {
    return reportItem.type === type;
  });

  return <List items={displayedReports} />;
}

export default USNewsReportsScreen;
