REACT_APP_SUPABASE_URL = "https://eaffgvgxoouylyukkkps.supabase.co";
REACT_APP_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZmZndmd4b291eWx5dWtra3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODY1NzgsImV4cCI6MjAxMjk2MjU3OH0.ZINMxaoVi-hNKSnByJYhlPGaouhLw8T-hFlUAH3PwHQ";
import { createClient } from "@supabase/supabase-js";
const supabaseURL = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseURL, supabaseKey);