import List from "../components/List/List";
import { REPORTS } from "../data/dummy_data";

// USA News Reports Screen
function USNewsReportsScreen() {
  const type = "US News";
  // Filter Reports into items based on report type
  const displayedReports = REPORTS.filter((reportItem) => {
    return reportItem.type === type;
  });
  // Returns list of items
  return <List items={displayedReports} />;
}

export default USNewsReportsScreen;
