import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/auth-context";
import { Rocket, LogOut, Plus, Trash2, ExternalLink, Lock, FileText, Folder } from "lucide-react";

interface Document {
  id: number;
  title: string;
  url: string;
  description: string | null;
  category: string;
  addedByName: string | null;
  createdAt: string;
}

const CATEGORIES = ["General", "CAD", "Avionics", "Propulsion", "Recovery", "Launch Ops", "Research"];

function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(username, password);
    } catch (err: any) {
      setError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="flex items-center gap-2 mb-10">
          <Rocket className="text-primary w-5 h-5" />
          <span className="text-lg font-bold tracking-tight text-white">WINDBURST</span>
        </div>

        <div className="border border-white/10 bg-black/50 backdrop-blur-md p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-primary w-4 h-4" />
            <h1 className="text-white font-bold font-mono tracking-widest text-sm">MEMBERS ONLY</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2 tracking-widest">USERNAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary/60 transition-colors"
                placeholder="sid / kp / max"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2 tracking-widest">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary/60 transition-colors"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            {error && (
              <p className="text-red-400 text-xs font-mono">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-black font-mono font-bold text-sm tracking-widest py-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "LOGIN"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function AddDocumentModal({ onClose, onAdd }: { onClose: () => void; onAdd: (doc: Document) => void }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/documents", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, url, description, category }),
      });
      if (!res.ok) throw new Error("Failed to add document");
      const doc = await res.json();
      onAdd(doc);
      onClose();
    } catch (err: any) {
      setError(err.message ?? "Failed to add");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md border border-white/10 bg-[#0a0a0f] p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <h2 className="text-white font-bold font-mono tracking-widest text-sm mb-6 flex items-center gap-2">
          <Plus className="w-4 h-4 text-primary" /> ADD RESOURCE
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1 tracking-widest">TITLE</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required
              className="w-full bg-white/5 border border-white/10 px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-primary/60 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1 tracking-widest">URL / LINK</label>
            <input value={url} onChange={(e) => setUrl(e.target.value)} required type="url"
              placeholder="https://drive.google.com/..."
              className="w-full bg-white/5 border border-white/10 px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-primary/60 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1 tracking-widest">CATEGORY</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#0a0a0f] border border-white/10 px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-primary/60 transition-colors">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1 tracking-widest">NOTES (optional)</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2}
              className="w-full bg-white/5 border border-white/10 px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none" />
          </div>
          {error && <p className="text-red-400 text-xs font-mono">{error}</p>}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 border border-white/10 text-muted-foreground font-mono text-xs tracking-widest py-2 hover:bg-white/5 transition-colors">
              CANCEL
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 bg-primary text-black font-mono font-bold text-xs tracking-widest py-2 hover:bg-primary/90 transition-colors disabled:opacity-50">
              {loading ? "ADDING..." : "ADD"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function Dashboard() {
  const { user, logout } = useAuth();
  const [docs, setDocs] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/api/documents", { credentials: "include" })
      .then((r) => r.json())
      .then(setDocs)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`/api/documents/${id}`, { method: "DELETE", credentials: "include" });
    setDocs((prev) => prev.filter((d) => d.id !== id));
  };

  const categories = ["All", ...Array.from(new Set(docs.map((d) => d.category)))];
  const filtered = activeCategory === "All" ? docs : docs.filter((d) => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Rocket className="text-primary w-4 h-4" />
            <span className="font-bold text-white tracking-tight">WINDBURST</span>
            <span className="text-muted-foreground font-mono text-xs">/ MEMBERS</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-muted-foreground hidden sm:block">
              {user?.displayName}
            </span>
            <button onClick={logout}
              className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-white transition-colors">
              <LogOut className="w-4 h-4" /> LOGOUT
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-28 pb-20 max-w-5xl">
        {/* Page title */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-6 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest">TEAM RESOURCES</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Documents &amp; Links</h1>
          </div>
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-2 bg-primary text-black font-mono font-bold text-xs tracking-widest px-6 py-3 hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" /> ADD RESOURCE
          </button>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs tracking-widest px-4 py-2 border transition-colors ${
                activeCategory === cat
                  ? "border-primary text-primary bg-primary/10"
                  : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Documents grid */}
        {loading ? (
          <div className="text-center py-20 text-muted-foreground font-mono text-sm">LOADING...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 border border-white/5 bg-black/30">
            <Folder className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground font-mono text-sm">No resources yet.</p>
            <button onClick={() => setShowAdd(true)} className="mt-4 text-primary font-mono text-xs underline underline-offset-4">
              Add the first one
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((doc) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group border border-white/10 bg-black/40 backdrop-blur-sm p-5 hover:bg-white/5 transition-colors relative"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-primary tracking-widest">{doc.category.toUpperCase()}</span>
                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="text-muted-foreground hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-start gap-2 mb-2">
                    <FileText className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <h3 className="text-white font-bold text-sm leading-tight">{doc.title}</h3>
                  </div>
                  {doc.description && (
                    <p className="text-xs text-muted-foreground font-mono mb-3 leading-relaxed">{doc.description}</p>
                  )}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                    <span className="text-xs font-mono text-muted-foreground">{doc.addedByName ?? "—"}</span>
                    <a href={doc.url} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1 text-primary font-mono text-xs hover:underline underline-offset-4">
                      OPEN <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {showAdd && (
        <AddDocumentModal
          onClose={() => setShowAdd(false)}
          onAdd={(doc) => setDocs((prev) => [...prev, doc])}
        />
      )}
    </div>
  );
}

export default function MembersPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground font-mono text-sm">LOADING...</div>
      </div>
    );
  }

  return user ? <Dashboard /> : <LoginForm />;
}
