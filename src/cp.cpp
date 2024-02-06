#include <iostream>
#include <string>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        string s;
        cin >> s;

        int count = 0;
        int first_black_index = -1; // Initialize the index of the first black cell to -1

        // Find the index of the first black cell
        for (int i = 0; i < s.length(); ++i) {
            if (s[i] == 'B') {
                // If this is the first black cell, increment count
                if (first_black_index == -1)
                    count++;
                // Update the index of the first black cell
                first_black_index = i;
            }
        }

        cout << count << endl;
    }

    return 0;
}
