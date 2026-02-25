import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  conatiner: { 
    width: "100%", 
    paddingHorizontal: 16 
  },
  card: {
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6
  },
  accent: { 
    width: 4, 
    backgroundColor: "#22C55E" 
  },
  content: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol: { 
    flex: 1,
    gap: 2 
  },
  title: { 
    fontSize: 14, 
    fontWeight: "700", 
    color: "#0F172A" 
  },
  message: { 
    fontSize: 13, 
    color: "#475569", 
    lineHeight: 18 
  }
})

export default styles