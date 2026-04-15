import { useOutletContext } from "react-router-dom";
import { TaskType } from "../components/Layout";

interface ContextType {
  task: TaskType[];
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
  deletedTask: TaskType[];
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
  setDeletedTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
  previouseTask: TaskType[];
  setPreviouseTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

function Settings(){
    const { themeColor, setThemeColor } = useOutletContext<ContextType>();
    const colorPalette = [
      "#FF6633", "#FFB399", "#FF33FF", "#FFFF99",
      "#00B3E6", "#E6B333", "#3366E6", "#999966",
      "#99FF99", "#B34D4D", "#80B300", "#809900",
      "#E6B3B3", "#6680B3", "#66991A", "#FF99E6",
      "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
      "#66994D", "#B366CC",
    ];

    const { task } = useOutletContext<ContextType>()
    const exportTasks = () => {
      const data = JSON.stringify(task, null, 2)
      const blob = new Blob([data], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "tasks-backup.json"
      a.click()

      URL.revokeObjectURL(url)
    }

    return (
      <div
        style={{
          border: "1px solid #000",
          backgroundColor: "#0e0000",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "60px auto 0",
            padding: "0 18px",
          }}
        >
          <div style={{ marginBottom: "11px" }}>
            <h3 style={{ marginBottom: "1px", fontSize: "1.05rem" }}>
              Pick a theme color
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 60px)",
                rowGap: "1px",
                columnGap: "2px",
                justifyContent: "center",
              }}
            >
              {colorPalette.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setThemeColor(color)}
                  aria-label={`Select ${color} theme color`}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    border:
                      color === themeColor
                        ? "3px solid #000"
                        : "2px solid #ddd",
                    backgroundColor: color,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                  }}
                />
              ))}
              {[...Array(2)].map((_, index) => (
                <div key={`placeholder-${index}`} />
              ))}
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <label htmlFor="color" style={{ fontWeight: 600 }}>
              Or choose a custom color:
            </label>
            <input
              id="color"
              title="color"
              type="color"
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              style={{
                width: "56px",
                height: "46px",
                border: "none",
                padding: 0,
                background: "none",
                borderRadius: "80px",
                cursor: "pointer",
              }}
            />
            <label htmlFor="backup"> Download ur task here</label>
            <button
              style={{
                position: "absolute",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "end",
                left: "60%",
              }}
              type="button"
              onClick={exportTasks}
            >
              Export
            </button>
          </div>
        </div>
      </div>
    );
}
export default Settings; 