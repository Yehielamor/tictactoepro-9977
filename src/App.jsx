import React, { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Bot, 
  BarChart3, 
  Zap, 
  Play, 
  Settings, 
  LogOut, 
  User, 
  Crown, 
  Target,
  Globe,
  Shield
} from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [gameDifficulty, setGameDifficulty] = useState('medium');
  const [activeGame, setActiveGame] = useState(null);

  // Mock data for dashboard
  const userStats = {
    username: 'AlexPro',
    rating: 1845,
    wins: 42,
    losses: 18,
    draws: 7,
    winRate: '78%',
    currentStreak: 8,
    rank: 12
  };

  const recentMatches = [
    { id: 1, opponent: 'Tactician', result: 'win', duration: '1:24', date: '10 min ago' },
    { id: 2, opponent: 'GridMaster', result: 'loss', duration: '2:15', date: '1 hour ago' },
    { id: 3, opponent: 'AI (Expert)', result: 'draw', duration: '3:42', date: '3 hours ago' },
    { id: 4, opponent: 'QuickPlay', result: 'win', duration: '0:58', date: 'Yesterday' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Grandmaster', rating: 2450, wins: 156 },
    { rank: 2, name: 'CheckmateKing', rating: 2310, wins: 142 },
    { rank: 3, name: 'TicTacPro', rating: 2250, wins: 138 },
    { rank: 4, name: 'StrategicMind', rating: 2180, wins: 127 },
    { rank: 5, name: 'GridDominator', rating: 2100, wins: 115 }
  ];

  const activeTournaments = [
    { id: 1, name: 'Weekly Championship', participants: 84, prize: 'Premium Badge' },
    { id: 2, name: 'Speed Blitz Cup', participants: 56, prize: '500 Coins' },
    { id: 3, name: 'Beginner Friendly', participants: 120, prize: 'Special Avatar' }
  ];

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      {/* Glassmorphic Navigation */}
      <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 rounded-2xl p-4 mb-12 border border-white/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              TicTacToePro
            </span>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-medium">
              Sign In
            </button>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-white font-semibold shadow-lg shadow-cyan-500/25"
            >
              Play Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Elevate Your Game
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience Tic Tac Toe like never before. Real-time multiplayer, intelligent AI, 
            competitive tournaments, and deep statistics in a premium platform.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-white font-semibold text-lg flex items-center shadow-lg shadow-purple-500/25">
              <Play className="mr-2 h-5 w-5" />
              Quick Match
            </button>
            <button className="px-8 py-3 rounded-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-white font-semibold text-lg flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Play with Friends
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Globe, title: 'Real-time Multiplayer', desc: 'Play instantly with players worldwide' },
            { icon: Bot, title: 'Smart AI', desc: 'Adaptive difficulty from beginner to expert' },
            { icon: Trophy, title: 'Tournaments', desc: 'Compete in bracket competitions' },
            { icon: BarChart3, title: 'Advanced Stats', desc: 'Track your performance and growth' }
          ].map((feature, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Preview */}
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Players Choose TicTacToePro</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10K+', label: 'Active Players' },
              { value: '98%', label: 'Matchmaking Success' },
              { value: '<100ms', label: 'Average Latency' },
              { value: '24/7', label: 'Tournaments' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              TicTacToePro
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
              <Settings className="h-5 w-5 text-gray-300" />
            </button>
            <button 
              onClick={() => setCurrentView('landing')}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <LogOut className="h-5 w-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Game Controls & Stats */}
        <div className="lg:col-span-2 space-y-8">
          {/* Game Board Preview */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Current Game</h2>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
              {Array.from({ length: 9 }).map((_, idx) => (
                <div key={idx} className="aspect-square backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 flex items-center justify-center text-4xl font-bold hover:bg-white/15 transition-all duration-300 cursor-pointer">
                  {idx % 3 === 0 ? 'X' : idx % 3 === 1 ? 'O' : ''}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-6">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 text-white font-semibold">
                New Game vs AI
              </button>
              <button className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-white font-semibold">
                Find Opponent
              </button>
            </div>
          </div>

          {/* Player Stats */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Your Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(userStats).map(([key, value]) => (
                key !== 'username' && (
                  <div key={key} className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="text-2xl font-bold text-white mt-1">{value}</div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Recent Matches */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Matches</h2>
            <div className="space-y-3">
              {recentMatches.map(match => (
                <div key={match.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${match.result === 'win' ? 'bg-emerald-500/20' : match.result === 'loss' ? 'bg-rose-500/20' : 'bg-yellow-500/20'}`}>
                      <User className={`h-5 w-5 ${match.result === 'win' ? 'text-emerald-400' : match.result === 'loss' ? 'text-rose-400' : 'text-yellow-400'}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{match.opponent}</div>
                      <div className="text-sm text-gray-400">{match.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${match.result === 'win' ? 'text-emerald-400' : match.result === 'loss' ? 'text-rose-400' : 'text-yellow-400'}`}>
                      {match.result.toUpperCase()}
                    </div>
                    <div className="text-sm text-gray-400">{match.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Leaderboard & Tournaments */}
        <div className="space-y-8">
          {/* User Profile Card */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                <User className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{userStats.username}</div>
                <div className="flex items-center text-cyan-400">
                  <Crown className="h-4 w-4 mr-1" />
                  <span>Rank #{userStats.rank}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-gray-400">Rating</span>
                <span className="text-xl font-bold text-white">{userStats.rating}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-gray-400">Win Rate</span>
                <span className="text-xl font-bold text-emerald-400">{userStats.winRate}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-gray-400">Current Streak</span>
                <span className="text-xl font-bold text-amber-400">{userStats.currentStreak} wins</span>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Global Leaderboard</h2>
            <div className="space-y-3">
              {leaderboard.map(player => (
                <div key={player.rank} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${player.rank <= 3 ? 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20' : 'bg-white/10'}`}>
                      <span className={`font-bold ${player.rank <= 3 ? 'text-amber-400' : 'text-gray-300'}`}>
                        {player.rank}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{player.name}</div>
                      <div className="text-sm text-gray-400">{player.wins} wins</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-cyan-400">{player.rating}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Tournaments */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Active Tournaments</h2>
            <div className="space-y-4">
              {activeTournaments.map(tournament => (
                <div key={tournament.id} className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-white">{tournament.name}</h3>
                    <div className="flex items-center text-amber-400">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tournament.prize}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{tournament.participants} participants</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      Join Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Difficulty Selector */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">AI Opponent</h2>
            <div className="space-y-3">
              {['beginner', 'medium', 'expert', 'master'].map(level => (
                <button
                  key={level}
                  onClick={() => setGameDifficulty(level)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${gameDifficulty === level ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white capitalize">{level}</div>
                      <div className="text-sm text-gray-400">
                        {level === 'beginner' ? 'Perfect for learning' :
                         level === 'medium' ? 'Balanced challenge' :
                         level === 'expert' ? 'Strategic gameplay' : 'Maximum difficulty'}
                      </div>
                    </div>
                    {gameDifficulty === level && (
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <Shield className="h-5 w-5 text-cyan-400" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return currentView === 'landing' ? <LandingPage /> : <DashboardPage />;
};

export default App;